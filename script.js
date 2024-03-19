
window.onload = function() {
    var student_id      = $("#student_id");
    var term            = $("#term");
    var valid_date      = $("#valid_date");
    var mecenat_id      = $("#mecenat_id");

    var firstname       = $("#firstname");
    var lastname        = $("#lastname");
    var birthdate       = $("#birthdate");
    var study_location  = $("#study_location");

    var f_firstname = $("#f_firstname");
    var f_lastname = $("#f_lastname");
    var f_birthdate = $("#f_birthdate");
    var f_study_location = $("#f_study_location");

    var settings_menu = $(".settings");
    var dim_overlay = $("#dim_overlay");

    settings_menu.hide();

    //#f_save onclick
    $("#f_save").click(function() {
        save();
        setCustoms();
    });

    $("#f_close").click(function() {
        hideSettings();
    });

    $(".c-name img").click(function() {
        showSettings();
    });

    $("#dim_overlay").click(function() {
        hideSettings();
    });

    setDefaults();
    setCustoms();

    function showSettings() {
        dim_overlay.show();
        settings_menu.show();
    }

    function hideSettings() {
        dim_overlay.hide();
        settings_menu.hide();
    }

    function setDefaults() {
        let date = new Date();
        //6 months 12days from now
        let expiryDate = new Date(date.getFullYear(), date.getMonth() + 6, date.getDate() + 12);
        let termTxt = (date.getMonth() < 6) ? "VT " : "HT ";
        termTxt += date.getFullYear().toString().substr(-2);

        term.text(termTxt);
        valid_date.text(expiryDate.toISOString().slice(0,10));
        student_id.text("STUDENT ID: " + Math.floor(10000000 + Math.random() * 90000000));
        let m_id = Math.floor(1000000000000000 + Math.random() * 9000000000000000);
        mecenat_id.text(m_id.toString().replace(/(\d{4})(?=\d)/g, '$1 '));
    }

    function setCustoms() {
        firstname.text(localStorage.getItem("firstname"));
        lastname.text(localStorage.getItem("lastname"));
        birthdate.text(localStorage.getItem("birthdate"));
        study_location.text(localStorage.getItem("study_location"));
    }

    function save() {
        console.log("Saving to local storage...");

        if(f_firstname.val())       {localStorage.setItem("firstname", f_firstname.val());}
        if(f_lastname.val())        {localStorage.setItem("lastname", f_lastname.val());}
        if(f_birthdate.val())       {localStorage.setItem("birthdate", f_birthdate.val());}
        if(f_study_location.val())  {localStorage.setItem("study_location", f_study_location.val());}
    }
}