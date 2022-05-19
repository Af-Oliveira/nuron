<script>
    var arrMyTagifys = new Map();
    var arrMySelects = new Map();
    var arrMyFiles = new Map();
</script>
<?php
function writeFieldForm($arrConfig, $dataField, $fieldName, $fieldValue = '')
{

    $strReturn = '';
    $select_colletion = '';
    $filedetail = '';
    switch ($dataField['type']) {

        case 'textbox':
            $strReturn .= '<div class="col-md-12">
            <div class="input-box pb--20">
                <label for="' . $fieldName . '" class="form-label">' . $dataField['label'] . '</label>
                <input id="' . $fieldName . '" name="' . $fieldName . '" style="border: solid 1px;">
            </div>
        </div>';
            break;

        case 'textarea':
            $strReturn .= '<div class="col-md-12">
                            <div class="input-box pb--20">
                                <label for="' . $fieldName . '" class="form-label">' . $dataField['label'] . '</label>
                                <textarea id="' . $fieldName . '" style="border: solid 1px;" name="' . $fieldName . '" rows="3" ></textarea>
                            </div>
                        </div>';
            break;

        case 'tag_multiselect':
            $strReturn .= '<div class="col-md-12">
                            <div class="input-box pb--20">
                                <label for="' . $fieldName . '" class="form-label">' . $dataField['label'] . '</label>
                                <input name="' . $fieldName . '_value" id="' . $fieldName . '_value" value="Tag1, Tag2" placeholder="e.x tag1, tag2">
                                <input name="' . $fieldName . '" id="' . $fieldName . '" value="" type="hidden">
                            </div>
                        </div>';
            break;
        case 'multiselect':
            $select_colletion = json_encode($dataField['select_colletion']);
            $strReturn .= '<div class="col-md-12">
                <div class="mb--15">
                <label class="form-label">' . $dataField['label'] . '</label>
                    <div class="' . $fieldName . '_value"></div>
                </div>
                <input name="' . $fieldName . '" id="' . $fieldName . '" value="" type="hidden">
            </div>';
            break;
        case 'active';
            $strReturn .= '  <div class="col-md-12 col-sm-12">
            <div class="input-box pb--20 rn-check-box">
              <input
                class="rn-check-box-input"
                type="checkbox"
                name="' . $fieldName . '"
                id="' . $fieldName . '"
      
              />
              <label class="rn-check-box-label" style="font-size: 20px" for="' . $fieldName . '">
               ' . $dataField['label'] . '
              </label>
            </div>
          </div>';
            break;
        case 'file';
            $filedetail = json_encode($dataField['filedetail']);

            $strReturn .= '
            <div class="upload-area">
                        <div class="upload-formate mb--30">
                            <h6 class="title">
                                Upload file
                            </h6>
                            <p class="formate">
                                Choose your file to upload
                            </p>
                        </div>
                        <input type="file" name="' . $fieldName . '_value" class="filepond" id="' . $fieldName . '_value" value="">
                        <input name="' . $fieldName . '" id="' . $fieldName . '" value="" type="hidden">
                        <p class="text-center " style="margin: 0 0 5px;">Choose a File</p>
                    </div>';
            break;
        case 'hidden':
            $strReturn .= '<input type="hidden" name="' . $fieldName . '" id="' . $fieldName . '" value="' . $dataField['value'] . '">';
            break;
    }

    echo "<script>
    if (`{$dataField['type']}` == `file`) {
        arrMyFiles.set(`{$fieldName}`, $filedetail);
        $('#filesinputs').append(`$strReturn`);
    } else if (`{$dataField['type']}` == `tag_multiselect`) {
        arrMyTagifys.set(`{$fieldName}`, null);
        $('#normalinputs').append(`$strReturn`);
    } else if (`{$dataField['type']}` == `multiselect`) {
        console.log(`{$select_colletion}`);
        arrMySelects.set(`{$fieldName}`, $select_colletion);    
        $('#normalinputs').append(`$strReturn`);
    } else {
        $('#normalinputs').append(`$strReturn`);
    }
    </script>";
}
?>

<form name="formInserir" id="formInserir" action="<?= $config['urls']['site'] . '/inc/include/db/trata_inserir.php?collection=' . $arrDados['collection'] ?>" method="post" class="row g-5" style="display: flex;
    align-items: center;
    justify-content: center;">
    <div class="col-lg-4" id="filesinputs">

    </div>
    <div class="col-lg-8" id="normalinputs">
    </div>
    <?php
    foreach ($arrDados['fields'] as $k => $v) {
        if ($v['insert']) {
            writeFieldForm($config, $v, $k);
        }
    }
    ?>
    <div class="col-lg-4">
    </div>
    <div class="col-lg-8">
        <div class="input-box">
            <button class="btn btn-primary btn-large w-100" id="btnSubmit">
                Submit Item
            </button>
        </div>
    </div>
</form>

<script>
    window.onload = function() {
        if (arrMyFiles.size == 0) {
            const cenagamer = ` <div class="slider-thumbnail">
            <img src="assets/images/slider/slider-1.png" alt="Slider Images" />
          </div>`;
            $('#filesinputs').append(cenagamer);
        }

        // ----- Init MyTags -----
        arrMyTagifys.forEach((value, key) => {
            let inputElm = document.querySelector(`input[name=${key}_value]`);
            let tagify = new Tagify(inputElm, {
                keepInvalidTags: false,
                maxTags: 10,
            })

            inputElm.addEventListener('change', () => console.log("CHANGED!"))
            arrMyTagifys.set(key, tagify);
            inputElm.addEventListener('change', onChange)

            function onChange(e) {
                arrValues = [];
                JSON.parse(e.target.value).forEach((value) => {
                    arrValues.push(value.value);
                });
                arrValues = JSON.stringify(arrValues);
                $(`#${key}`).val(arrValues);
            }
        });

        // ----- Init MySelects -----
        arrMySelects.forEach(async (value, key) => {
            let filter = JSON.stringify(value.filter);
            let options = await getMongoData(value.collection, filter);

            const myData = [];
            options.forEach((element) => {
                const object_option = {
                    value: element[value.key],
                    label: element[value.field],
                };
                myData.push(object_option);
            });

            var mySelect = new MultiSelect2('.' + key + '_value', {
                value: [],
                icon: 'fa fa-times',
                multiple: true,
                options: myData,
                max_selected_options: value.max_selected_options ?? null,
                selected_options: new Map(),
                noOptions: value.missing ?? 'No options available',
                onChange: value => {
                    $(`#${key}`).val(JSON.stringify(value));
                }
            });
            value.MultiSelect2 = mySelect;
            arrMySelects.set(key, value);
        });

        // ----- Init MyFileponds -----
        arrMyFiles.forEach((value, key) => {
            FilePond.parse(document.body);
            const inputElement = document.querySelector(`#${key}_value`);

            FilePond.registerPlugin(FilePondPluginImagePreview);
            FilePond.registerPlugin(FilePondPluginFileValidateType);

            const pond = FilePond.create(inputElement, {
                allowMultiple: true,
                allowFileEncode: true,
                maxFiles: value.Mnumber,
                acceptedFileTypes: value.type,
                labelFileTypeNotAllowed: 'Only images are allowed',
                instantUpload: false,
                allowProcess: false,
            });
            pond.folder = value.folder;

            arrMyFiles.set(key, pond);
        });


        $('#btnSubmit').click((e) => {
            e.preventDefault();
            arrFilesToUpload = [];
            let i = 0;
            let toSubmit = false;
            if (arrMyFiles.size > 0) {
                arrMyFiles.forEach((value, key) => {
                    var folder = value.folder;
                    let arrFilesFromValue = value.getFiles();
                    let arrFilesName = [];
                    arrFilesFromValue.forEach(file => {
                        uploadFile(file.file, folder);
                        arrFilesName.push(file.file.name);
                    });
                    $(`#${key}`).val(JSON.stringify(arrFilesName));
                    i++;
                    if (i == arrMyFiles.size) {
                        toSubmit = true;
                    }
                    if (toSubmit) {
                        $('#formInserir').submit();
                    }
                });
            } else {
                $('#formInserir').submit();
            }
        })
    }
</script>