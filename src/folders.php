<?php
$dir = 'audio';
$files = scandir($dir);
function dirWithoutDot($dir)
{
    return array_values(array_diff(scandir($dir), array('..', '.')));
}
print_r(json_encode(dirWithoutDot($dir)));