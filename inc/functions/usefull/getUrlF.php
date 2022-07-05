<?php


function getUrlFriendly($url, $cfg, $mongoClient)
{
    $queryUrl = parse_url($url, PHP_URL_QUERY);
    parse_str($queryUrl, $params);
    $urlWithoutQuery = preg_replace('/\?.*/', '', $url);


    $filter =  ['url' => $urlWithoutQuery];
    $mongoCollection = $mongoClient->SEO;
    $res = $mongoCollection->findOne(
        $filter,
    );


    if ($res) {
        $urlFriendly = $res['UrlF'];
        foreach ($params as $key => $parm) {
            if (str_contains($urlFriendly, '{' . $key . '}')) {
                $urlFriendly = str_replace('{' . $key . '}', $parm, $urlFriendly);
                unset($params[$key]);
            }
        }

        return $cfg['urls']['site'] . $urlFriendly . (count($params) > 0 ? '?' . http_build_query($params) : '');
    } else {
        return $cfg['urls']['site'] . '/' . $url;
    }
}
