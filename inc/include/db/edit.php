<?php
$vars = isset($params) ?  $params : $_GET;
$id = $vars['id'];
$filter =  ['id' => $id];
$mongoCollection = $mongoClient->itens;
$resMongoQueryUser = $mongoCollection->findOne(
    $filter
);
$data = $resMongoQueryUser;
?>
<script>
    var arrMyTagifys = new Map();
    var arrMySelects = new Map();
    var arrMyFiles = new Map();
    var id = '<?= $id ?>';

    var postData = <?php echo json_encode($data); ?>;
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
                <input data-span="Vspan-' . $fieldName . '" class="input" type="text" id="' . $fieldName . '" name="' . $fieldName . '" value="' . $fieldValue . '" maxlength="' . $dataField['Max_length'] . '" style="border: solid 1px;"  required>
            </div>
            <div style="
            display: flex;
            justify-content: space-between;">

            <span style ="margin-top: -15px;padding-bottom: 10px ;" id="Vspan-' . $fieldName . '">' . strlen($fieldValue) . '/' . $dataField['Max_length'] . '</span>';
            if (isset($dataField['validation'])) {
                $strReturn .= '<div class="d-none" style="text-decoration: underline;
font-weight: 900;
margin-top: -15px;
padding-bottom: 10px;
color: #ff0000a8;" id="v-' . $fieldName . '">
' . $dataField['validation'] . '
</div>';
            }
            $strReturn .= ' </div></div>';
            break;

        case 'textarea':
            $strReturn .= '<div class="col-md-12">
                            <div class="input-box pb--20">
                                <label for="' . $fieldName . '" class="form-label">' . $dataField['label'] . '</label>
                                <textarea data-span="Vspan-' . $fieldName . '" class="textarea" id="' . $fieldName . '" style="border: solid 1px;" maxlength="' . $dataField['Max_length'] . '" name="' . $fieldName . '" value="" rows="3" required >' . $fieldValue . '</textarea>
                            </div>
                            <div style="
                            display: flex;
                            justify-content: space-between;">

                            <span style ="margin-top: -15px;padding-bottom: 10px ;" id="Vspan-' . $fieldName . '">' . strlen($fieldValue) . '/' . $dataField['Max_length'] . '</span>';
            if (isset($dataField['validation'])) {
                $strReturn .= '<div class="d-none" style="text-decoration: underline;
    font-weight: 900;
    margin-top: -15px;
    padding-bottom: 10px;
    color: #ff0000a8;" id="v-' . $fieldName . '">
    ' . $dataField['validation'] . '
    </div>';
            }
            $strReturn .= ' </div></div>';
            break;

        case 'tag_multiselect':
            $strReturn .= '<div class="col-md-12">
                            <div class="input-box pb--20">
                                <label for="' . $fieldName . '" class="form-label">' . $dataField['label'] . '</label>
                                <input name="' . $fieldName . '_value" id="' . $fieldName . '_value" value="' . implode(', ', (array) $fieldValue) . '" placeholder="e.x tag1, tag2">
                                <input name="' . $fieldName . '" id="' . $fieldName . '" value="' . implode(', ', (array)  $fieldValue) . '" ' . (isset($dataField['min_select'])  ? 'min_select="' . $dataField['min_select'] . '" required' : '') . ' type="hidden">
                            </div>
                        </div>';
            if (isset($dataField['validation'])) {
                $strReturn .= '<div class="d-none" style="text-decoration: underline;
                font-weight: 900;
                margin-top: -15px;
                padding-bottom: 10px;
                color: #ff0000a8;" id="v-' . $fieldName . '">
                ' . $dataField['validation'] . '
                </div>';
            }
            $strReturn .= ' </div>';
            break;
        case 'multiselect':
            $select_colletion = json_encode($dataField['select_colletion']);
            $strReturn .= '<div class="col-md-12">
                <div class="mb--15">
                <label class="form-label">' . $dataField['label'] . '</label>
                    <div class="' . $fieldName . '_value"></div>
                </div>
                <input name="' . $fieldName . '" id="' . $fieldName . '" value="" type="hidden" ' . (isset($dataField['min_select'])  ? 'min_select="' . $dataField['min_select'] . '" required' : '') . '>
            </div>';
            if (isset($dataField['validation'])) {
                $strReturn .= '<div class="d-none" style="text-decoration: underline;
    font-weight: 900;
    margin-top: -15px;
    padding-bottom: 10px;
    color: #ff0000a8;" id="v-' . $fieldName . '">
    ' . $dataField['validation'] . '
    </div>';
            }
            $strReturn .= ' </div>';
            break;
        case 'active';
            $ck = ($fieldValue == "1" ? 'checked' : '');

            $strReturn .= '  <div class="col-md-12 col-sm-12">
            <div class="input-box pb--20 rn-check-box">
              <input type="checkbox"
                class="rn-check-box-input" ' . $ck . '
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
                        <input name="' . $fieldName . '" id="' . $fieldName . '" value="" type="hidden" ' . (isset($dataField['min_select'])  ? 'min_select="' . $dataField['min_select'] . '" required' : '') . '>
                        <p class="text-center " style="margin: 0 0 5px;">Choose a File</p>
                    </div>';
            if (isset($dataField['validation'])) {
                $strReturn .= '<div class="d-none" style="text-decoration: underline;
            font-weight: 900;
            margin-top: -5px;
            padding-bottom: 10px;
            color: #ff0000a8;" id="v-' . $fieldName . '">
            ' . $dataField['validation'] . '
            </div>';
            }
            $strReturn .= ' </div>';
            break;
        case 'hidden':

            $strReturn .= '<input type="hidden" name="' . $fieldName . '" id="' . $fieldName . '" value="' . ($dataField['value']) . '" >';
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

<form name="formInserir" id="formInserir" action="<?= $config['urls']['site'] . '/inc/include/db/trata_editar.php?collection=' . $arrDados['collection'] ?>&id=<?= $id ?>" method="post" class="row g-5" style="display: flex;
    align-items: center;
    justify-content: center;">
    <div class="col-lg-4" id="filesinputs">

    </div>
    <div class="col-lg-8" id="normalinputs">
    </div>
    <?php
    foreach ($arrDados['fields'] as $k => $v) {
        if ($v['insert'] || $v['sort']) {
            if ($v['edit']) {
                writeFieldForm($config, $v, $k, $data['' . $k . '']);
            }
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
            <img src="<?= $config['urls']['site'] ?>/assets/images/slider/slider-1.png" alt="Slider Images" />
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

            onChange({
                target: {
                    value: JSON.stringify(arrMyTagifys.get(key).value)
                }
            });

        });

        // ----- Init MySelects -----
        arrMySelects.forEach(async (value, key) => {


            let filter = JSON.stringify(value.filter);
            let options = await getMongoData(value.collection, filter, '<?= $config['urls']['site'] ?>');


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


            let arrV = [];

            (postData[key]).forEach((element) => {
                if (element)
                    arrV.push(element);

            });
            mySelect._setValue(arrV, !0);

            value.MultiSelect2 = mySelect;
            arrMySelects.set(key, value);
        });

        // ----- count max lenght -----
        $(`textarea`).on(`keyup`, (e) => {
            if ($(e.target).hasClass(`textarea`)) {
                var maxlength = e.target.getAttribute("maxlength");
                const textArea = $(e.target);
                console.log((textArea.val()).length);
                var spanid = e.target.getAttribute(`data-span`);
                span = document.getElementById(spanid);
                span.textContent = (textArea.val()).length + "/" + maxlength;

            }
        });

        $(`input`).on(`keyup`, (e) => {
            if ($(e.target).hasClass(`input`)) {
                var maxlength = e.target.getAttribute("maxlength");
                const textArea = $(e.target);
                console.log((textArea.val()).length);
                var spanid = e.target.getAttribute(`data-span`);
                span = document.getElementById(spanid);
                span.textContent = (textArea.val()).length + "/" + maxlength;

            }
        });

        // ----- Init MyFileponds -----
        arrMyFiles.forEach(async (value, key) => {
            let arrAlreadySelectedOptions = postData.images;

            let arrImgs = [];
            arrAlreadySelectedOptions.forEach((source) => {
                if (source)
                    arrImgs.push({
                        source: `<?= $config['urls']['site'] . '/upload/profiles/' ?>${postData.user}/itens/${source}`,
                    });
            });


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
                files: arrImgs
            });



            pond.folder = value.folder;
            arrMyFiles.set(key, pond);
        });


        $('#btnSubmit').click((e) => {
            e.preventDefault();
        })

        async function uploadFILES(i, maxCount) {

            arrMyFiles.forEach((value, key) => {
                maxCount += (value.getFiles()).length;
            });


            arrMyFiles.forEach((value, key) => {
                var folder = value.folder;
                let arrFilesFromValue = value.getFiles();
                let arrFilesName = [];
                arrFilesFromValue.forEach((file) => {
                    uploadFile(file.file, folder).then(() => {
                        arrFilesName.push(file.file.name);
                        i++;
                        $(`#${key}`).val(JSON.stringify(arrFilesName));
                        console.log(`${i}/${maxCount}`);
                    });
                })
            });
        }

        $(document).on('click', async (e) => {

            if (e.target.id == 'btnSubmit') {
                var forms = document.getElementById("formInserir")
                var validation = 0;
                event.stopPropagation();
                e.preventDefault()
                let arrFilesName = [];
                arrMyFiles.forEach((value, key) => {
                    let arrFilesFromValue = value.getFiles();
                    console.log(arrFilesFromValue);
                    arrFilesFromValue.forEach((file) => {
                        arrFilesName.push(file.file.name);
                    })
                    $(`#${key}`).val(JSON.stringify(arrFilesName));
                });


                Array.from(forms.elements).forEach(function(element) {

                    Validationid = element.id;
                    $(`#v-${Validationid}`).addClass('d-none');
                    if (element.validity.valueMissing) {
                        $(`#v-${Validationid}`).removeClass('d-none');
                        validation = 1;
                    };

                    min_select = $(`#${Validationid}`).attr('min_select');
                    if (min_select != undefined) {
                        inputvalue = JSON.parse($(`#${Validationid}`).val());
                        console.log(inputvalue);
                        if (inputvalue.length < +min_select) {
                            console.log('second');
                            $(`#v-${Validationid}`).removeClass('d-none');
                            validation = 1;
                        }
                    }


                });



                if (validation == 0) {
                    if (arrMyFiles.size > 0) {
                        var i = 0;
                        var maxCount = 0;
                        await uploadFILES(i);
                        $('#formInserir').submit();
                    } else {
                        $('#formInserir').submit();
                    }
                }


            }
        })
    }
</script>