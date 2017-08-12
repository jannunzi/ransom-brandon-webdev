<!DOCTYPE html>

<html>

<head>

    <title> Test Javascript API </title>

    //Remember to include jquery.js as script src
    <script type="text/javascript" src="http://d24cgw3uvb9a9h.cloudfront.net/static/13294/js/lib/jquery.js?44165"></script>
    <script type="text/javascript" src="http://d24cgw3uvb9a9h.cloudfront.net/static/13294/js/lib/jquery.cookie.js?44165"></script>
    //Remember to include zoomus.js as script src
    <script type="text/javascript" src="http://d24cgw3uvb9a9h.cloudfront.net/static/37726/js/api/zoomus.js?44165"></script>

</head>

<body>

<input type="button" id="btn_login" value="Javascript Login Zoom"/>

<br><br>

<input type="button" id="btn_list" value="List Meetings"/>

<br><br>

Meeting Number:
<input type="text" name="meeting_number" id="meeting_number" maxlength="15"/>

<br><br>

<input type="button" id="btn_get" value="Get Meeting"/>

<input type="button" id="btn_pmi" value="Get PMI"/>

<input type="button" id="btn_end" value="End Meeting"/>

<input type="button" id="btn_del" value="Delete Meeting"/>

<br><br>

Meeting Info:
<textarea id="meetingInfo" name="meeingInfo" cols="120" rows="10">

  {"topic":"Test create meeting via javascript API",

   "password":"123",

   "type":2,

   "start_time":"2015-4-15T01:00:00Z",

   "duration":35,

   "timezone":"GMT+6:00",

   "option_jbh":true,

   "option_host_video":true,

   "option_participants_video":true,

   "option_audio_type":"both"}

  </textarea>

<br><br>

<input type="button" id="btn_create" value="Create Meeting"/>

<input type="button" id="btn_update" value="Update Meeting"/>

<br><br>

<h3 id="api_title"></h3>

<p id="errMsg"></p>

<script>

    $('#btn_login').click(function(){

        Zoom.init("https://www.zoom.us/api/v1");
        //Remember to put your email and password to login
        Zoom.login({email:" ",password:" "},function(result){

            $('#btn_login').val("login success");

        });

        return false;
    });

    $('#btn_list').click(function(){

        Zoom.listMeeting({page_size:10,page_number:1},function(result){

            $('#api_title').html("List Meeting");

            $('#errMsg').html(JSON.stringify(result));

        });

        return false;

    });

    $('#btn_create').click(function(){

        Zoom.createMeeting(JSON.parse($('#meetingInfo').val()),

            function(result){

                $('#api_title').html("Create Meeting");

                $('#errMsg').html(JSON.stringify(result));

            });

        return false;

    });

    $('#btn_get').click(function(){

        if($('#meeting_number').val().trim().length < 8){

            alert("Please enter meeting number.");

            return ;

        }

        Zoom.getMeeting({meeting_number: $('#meeting_number').val()},

            function(result){

                $('#api_title').html("Get Meeting");

                $('#errMsg').html(JSON.stringify(result));

            });

        return false;

    });

    $('#btn_end').click(function(){

        if($('#meeting_number').val().trim().length < 8){

            alert("Please enter meeting number.");

            return ;

        }

        Zoom.endMeeting({meeting_number: $('#meeting_number').val()},

            function(result){

                $('#api_title').html("End Meeting");

                $('#errMsg').html(JSON.stringify(result));

            });

        return false;

    });

    $('#btn_del').click(function(){

        if($('#meeting_number').val().trim().length < 8){

            alert("Please enter meeting number.");

            return ;

        }

        Zoom.deleteMeeting({meeting_number: $('#meeting_number').val()},

            function(result){

                $('#api_title').html("Delete Meeting");

                $('#errMsg').html(JSON.stringify(result));

            });

        return false;

    });

    $('#btn_pmi').click(function(){

        Zoom.getPMI(

            function(result){

                $('#api_title').html("GET PMI");

                $('#errMsg').html(JSON.stringify(result));

            });

        return false;

    });

    $('#btn_update').click(function(){

        if($('#meeting_number').val().trim().length < 8){

            alert("Please enter meeting number.");

            return ;

        }

        var data = JSON.parse($('#meetingInfo').val());

        data.meeting_number = $('#meeting_number').val().trim();

        Zoom.updateMeeting(data,

            function(result){

                $('#api_title').html("Update Meeting");

                $('#errMsg').html(JSON.stringify(result));

            });

        return false;

    });

</script>

</body>

</html>