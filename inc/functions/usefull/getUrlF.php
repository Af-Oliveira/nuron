<?php


function getUrlFriendly($url, $cfg, $mongoClient)
{
    $queryUrl = parse_url($url, PHP_URL_QUERY);
    parse_str($queryUrl, $params);
    $urlWithoutQuery = preg_replace('/\?.*/', '', $url);

    $filter =  ['url' => $urlWithoutQuery];
    $mongoCollection = $mongoClient->SEO;
    $resMongoQueryUser = $mongoCollection->find(
        $filter,
        ['limit' => 1]
    );
    $result = $resMongoQueryUser->toArray();


    if (count($result) > 0) {
        $urlFriendly = $result[0]['UrlF'];
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
