<?php
function formatTimeStamp($ts)
{
    $day = date("d", $ts);
    $month = date("M", $ts);
    $year = date("Y", $ts);
    return ($day . ' of ' . $month . ' of ' . $year);
}
