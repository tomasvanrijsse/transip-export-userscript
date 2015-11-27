// ==UserScript==
// @name         Export TransIP DNS
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  extend transip domain with easy-to-copy-paste url,token and DNS records
// @author       Tomas van Rijsse
// @match        https://www.transip.nl/cp/domein-hosting/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==
/* jshint -W097 */
'use strict';

var $rows = jQuery('.dns-form-panels').find('.form-panel');
var $table = jQuery('<table></table>');

$table.append('<tr><th>Name</th><th>Type</th><th>Waarde</th></tr>');

$rows.each(function(){
    var $ = jQuery;
    
    if($(this).find('input.content').val() != ""){

        var $row = $('<tr></tr>');
        $row.append('<td>'+ $(this).find('input.name').val() + '</td>');
        $row.append('<td>'+ $(this).find('select.type').val() + '</td>');
        $row.append('<td>'+ $(this).find('input.content').val() + '</td>');
        $table.append($row);
        
    }
});

$table.find('th,td').css('padding','0 10px 0 0');
$table.find('th').css('text-align','left');

var $export = jQuery('<div class="overview-panel"></div>');

$export.append('<h3>' + jQuery('h1 a').text() + '</h3>');
$export.append('<p>Autorisatiecode: '+ jQuery('.auth-code').html() +'</p>');
$export.append($table);

jQuery('div.fragment-overview').append($export);
