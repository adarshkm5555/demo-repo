var currentLevel = current.getValue("u_current_approval_level");

var start;
var end;

var caseID = current.getValue("u_case");

var caseGr = new GlideRecord("sn_customerservice_case");
caseGr.get(caseID);

var group = "";
var grSarRprt;

var appMatSAR = new GlideRecord("sn_customerservice_sar_approval_matrix");
appMatSAR.get(current.getValue("u_approval_matrix"));

if (currentLevel == 0) {
    current.u_first_level_approval = "approved";
    if (appMatSAR.getValue("u_approval_level_2") != null)
        current.u_second_level_approval = "requested";
    current.u_current_approval_level = 1;
    group = appMatSAR.getValue("u_approval_level_2");
    current.u_current_approval_group = group;
    current.u_approval_level_1_time = new GlideDateTime().getDisplayValue();

    grSarRprt = new GlideRecord('sn_customerservice_sar_report');
    grSarRprt.addQuery('u_sar_entry_ref', '=', current.sys_id);
    grSarRprt.setLimit(1);
    grSarRprt.query();
    if (grSarRprt.next()) {
        var created = new GlideDateTime(grSarRprt.u_case.sys_created_on);
        var verified = new GlideDateTime();

        var duration = GlideDateTime.subtract(created, verified);
        grSarRprt.u_mttv = duration;

        grSarRprt.update();

    }
} else if (currentLevel == 1) {
    current.u_second_level_approval = "approved";
    if (appMatSAR.getValue("u_approval_level_3") != null)
        current.u_third_level_approval = "requested";
    current.u_current_approval_level = 2;
    group = appMatSAR.getValue("u_approval_level_3");
    current.u_current_approval_group = group;

    start = current.u_approval_level_1_time;
    end = new GlideDateTime().getDisplayValue();

    current.u_approval_level_2_time = end;

    generateKPIforSAR(current, "MTTALV2", start, end);
} else if (currentLevel == 2) {
    current.u_third_level_approval = "approved";
    if (appMatSAR.getValue("u_approval_level_4") != null)
        current.u_fourth_level_approval = "requested";
    current.u_current_approval_level = 3;
    group = appMatSAR.getValue("u_approval_level_4");
    current.u_current_approval_group = group;

    start = current.u_approval_level_2_time;
    end = new GlideDateTime().getDisplayValue();

    current.u_approval_level_3_time = end;

    generateKPIforSAR(current, "MTTALV3", start, end);

} else if (currentLevel == 3) {
    current.u_fourth_level_approval = "approved";
    if (appMatSAR.getValue("u_approval_level_5") != null)
        current.u_fifth_level_approval = "requested";
    current.u_current_approval_level = 4;
    group = appMatSAR.getValue("u_approval_level_5");
    current.u_current_approval_group = group;

    start = current.u_approval_level_3_time;
    end = new GlideDateTime().getDisplayValue();

    current.u_approval_level_4_time = end;

    generateKPIforSAR(current, "MTTALV4", start, end);

} else if (currentLevel == 4) {
    current.u_fifth_level_approval = "approved";
    if (appMatSAR.getValue("u_approval_level_6") != null)
        current.u_sixth_level_approval = "requested";
    current.u_current_approval_level = 5;
    group = appMatSAR.getValue("u_approval_level_6");
    current.u_current_approval_group = group;

    start = current.u_approval_level_4_time;
    end = new GlideDateTime().getDisplayValue();

    current.u_approval_level_5_time = end;

    generateKPIforSAR(current, "MTTALV5", start, end);

} else if (currentLevel == 5) {
    current.u_sixth_level_approval = "approved";
    if (appMatSAR.getValue("u_approval_level_7") != null)
        current.u_seventh_level_approval = "requested";
    current.u_current_approval_level = 6;
    group = appMatSAR.getValue("u_approval_level_7");
    current.u_current_approval_group = group;

    start = current.u_approval_level_5_time;
    end = new GlideDateTime().getDisplayValue();

    current.u_approval_level_6_time = end;

    generateKPIforSAR(current, "MTTALV6", start, end);

} else if (currentLevel == 6) {
    current.u_seventh_level_approval = "approved";
    if (appMatSAR.getValue("u_approval_level_8") != null)
        current.u_eight_level_approval = "requested";
    current.u_current_approval_level = 7;
    group = appMatSAR.getValue("u_approval_level_8");
    current.u_current_approval_group = group;

    start = current.u_approval_level_6_time;
    end = new GlideDateTime().getDisplayValue();

    current.u_approval_level_7_time = end;

    generateKPIforSAR(current, "MTTALV7", start, end);

} else if (currentLevel == 7) {
    current.u_eight_level_approval = "approved";
    if (appMatSAR.getValue("u_approval_level_9") != null)
        current.u_ninth_level_approval = "requested";
    current.u_current_approval_level = 8;
    group = appMatSAR.getValue("u_approval_level_9");
    current.u_current_approval_group = group;

    start = current.u_approval_level_7_time;
    end = new GlideDateTime().getDisplayValue();

    current.u_approval_level_8_time = end;

    generateKPIforSAR(current, "MTTALV8", start, end);

} else if (currentLevel == 8) {
    current.u_ninth_level_approval = "approved";
    if (appMatSAR.getValue("u_approval_level_10") != null)
        current.u_tenth_level_approval = "requested";
    current.u_current_approval_level = 9;
    group = appMatSAR.getValue("u_approval_level_10");
    current.u_current_approval_group = group;

    start = current.u_approval_level_8_time;
    end = new GlideDateTime().getDisplayValue();

    current.u_approval_level_9_time = end;

    generateKPIforSAR(current, "MTTALV9", start, end);

} else if (currentLevel == 9) {
    current.u_tenth_level_approval = "approved";
    if (appMatSAR.getValue("u_approval_level_11") != null)
        current.u_eleventh_level_approval = "requested";
    current.u_current_approval_level = 10;
    group = appMatSAR.getValue("u_approval_level_11");
    current.u_current_approval_group = group;

    start = current.u_approval_level_9_time;
    end = new GlideDateTime().getDisplayValue();

    current.u_approval_level_10_time = end;

    generateKPIforSAR(current, "MTTALV10", start, end);

} else if (currentLevel == 10) {
    current.u_eleventh_level_approval = "approved";
    if (appMatSAR.getValue("u_approval_level_12") != null)
        current.u_twelfth_level_approval = "requested";
    current.u_current_approval_level = 11;
    group = appMatSAR.getValue("u_approval_level_12");
    current.u_current_approval_group = group;

    start = current.u_approval_level_10_time;
    end = new GlideDateTime().getDisplayValue();

    current.u_approval_level_11_time = end;

    generateKPIforSAR(current, "MTTALV11", start, end);

} else if (currentLevel == 11) {
    current.u_twelfth_level_approval = "approved";
    current.u_current_approval_level = 12;
    current.u_current_approval_group = "";

    start = current.u_approval_level_11_time;
    end = new GlideDateTime().getDisplayValue();

    current.u_approval_level_12_time = end;

    generateKPIforSAR(current, "MTTALV12", start, end);
}

if (!gs.nil(group)) {
    new global.MultiSarUtility().triggerEventForNotification(caseGr, caseID, group);
}

current.update();

if ((current.getValue("u_required_approvals") == current.getValue("u_current_approval_level")) && current.getValue("u_final_approval") != "rejected") {

    current.setValue("u_current_approval_group", "");
    current.setValue("u_final_approval", "approved");
    // Generate SAR automatically 
    gs.info("SAR Creation called " + current.sys_id);

    grSarRprt = new GlideRecord('sn_customerservice_sar_report');
    grSarRprt.get('u_sar_entry_ref', current.sys_id);

    var create = caseGr.sys_created_on;

    var gdt1 = new GlideDateTime(create);
    var gdt2 = new GlideDateTime(current.u_approval_level_1_time);
    var gdt3 = new GlideDateTime();

    var duration_mtta = GlideDateTime.subtract(gdt2, gdt3);

    var duration_mttir = GlideDateTime.subtract(gdt1, gdt3);

    grSarRprt.u_mtta = duration_mtta;
    grSarRprt.u_mttir = duration_mttir;
    grSarRprt.u_ref_issued_timestamp = gdt3.getValue();


    var generated_sar_id = new sn_customerservice.GenerateSARUtils().createSARFromSAREntry(current.getUniqueValue());
    current.u_sar_number = generated_sar_id;
    current.u_sar_generated = true;

    grSarRprt.u_site_access_request = generated_sar_id;
    grSarRprt.update();

    var sar = new GlideRecord("sn_customerservice_site_access_request");
    if (sar.get(generated_sar_id)) {
        current.u_sar_reference_number = sar.u_sar_reference_number;
    }

    start = current.getDisplayValue("sys_created_on");
    end = new GlideDateTime().getDisplayValue();

    current.u_final_approved = end;

    generateKPIforSAR(current, "MTTA", start, end);

    current.update();
}

var baseURL = gs.getProperty("glide.servlet.uri");
action.setRedirectURL(baseURL + "sn_customerservice_site_access_request_entries_list.do?sysparm_query=u_case=" + current.getValue("u_case"));


function generateKPIforSAR(sarEntryGr, kpiName, approved_start_time, approved_end_time) {

    var sarKPIGr = new GlideRecord('sn_customerservice_sar_kpi_metrics');
    sarKPIGr.initialize();
    sarKPIGr.u_kpi_name = kpiName;
    sarKPIGr.u_sar_id = sarEntryGr.getUniqueValue();
    sarKPIGr.u_kpi_start = approved_start_time;
    sarKPIGr.u_kpi_end = approved_end_time;
    sarKPIGr.insert();
}
