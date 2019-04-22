// Copyright (c) 2019, Sione Taumoepeau and contributors
// For license information, please see license.txt


cur_frm.add_fetch('employee_memo_to','employee_name','memo_to');
cur_frm.add_fetch('employee_memo_from','employee_name','memo_from');

//cur_frm.add_fetch('employee','designation','employee_role');

frappe.ui.form.on('Memo', {
	refresh: function(frm) {
		
		frm.set_query("employee_memo_to", function() {
			return {
				filters: { 
					employee_group: ["=", "Senior Executive Management"]
				}};
		});

		frm.set_query("employee_memo_from", function() {
			return {
				filters: { 
					
				}};
		});


	},

	onload: function(frm) {
		if (!frm.doc.memo_date) {
			frm.set_value("memo_date", frappe.datetime.get_today());
		}
		var Current_User = user;
		frappe.call({
			method:"frappe.client.get",
			args: {
				doctype:"User",
				filters: {'email': Current_User
				},
			},
			callback: function(r) {
				if (frm.doc.docstatus == 0 && frm.doc.owner == r.message["name"] ){
					if (frappe.user.has_role("Chief Executive Officer")){
						cur_frm.set_df_property("memo_status", "read_only", 0);
						cur_frm.set_df_property("ceo_comments", "read_only", 0);
						cur_frm.set_df_property("cfo_comments", "read_only", 1);
						cur_frm.set_df_property("cco_comments", "read_only", 1);
						cur_frm.set_df_property("coo_comments", "read_only", 1);
						cur_frm.set_df_property("cdo_comments", "read_only", 1);
						cur_frm.set_df_property("csqa_comments", "read_only", 1);
					}		
					else if (frappe.user.has_role("Chief Corporate Officer")){
						cur_frm.set_df_property("memo_status", "read_only", 1);
						cur_frm.set_df_property("ceo_comments", "read_only", 1);
						cur_frm.set_df_property("cco_comments", "read_only", 0);
						cur_frm.set_df_property("cfo_comments", "read_only", 1);
						cur_frm.set_df_property("coo_comments", "read_only", 1);
						cur_frm.set_df_property("cdo_comments", "read_only", 1);
						cur_frm.set_df_property("csqa_comments", "read_only", 1);
					
					}
					else if (frappe.user.has_role("Chief Finance Officer")){
						cur_frm.set_df_property("memo_status", "read_only", 1);
						cur_frm.set_df_property("ceo_comments", "read_only", 1);
						cur_frm.set_df_property("cco_comments", "read_only", 1);
						cur_frm.set_df_property("cfo_comments", "read_only", 0);
						cur_frm.set_df_property("coo_comments", "read_only", 1);
						cur_frm.set_df_property("cdo_comments", "read_only", 1);
						cur_frm.set_df_property("csqa_comments", "read_only", 1);
					
					}
					else if (frappe.user.has_role("Chief Operation Officer")){
						cur_frm.set_df_property("memo_status", "read_only", 1);
						cur_frm.set_df_property("ceo_comments", "read_only", 1);
						cur_frm.set_df_property("cco_comments", "read_only", 1);
						cur_frm.set_df_property("cfo_comments", "read_only", 1);
						cur_frm.set_df_property("coo_comments", "read_only", 0);
						cur_frm.set_df_property("cdo_comments", "read_only", 1);
						cur_frm.set_df_property("csqa_comments", "read_only", 1);
					
					}
					else if (frappe.user.has_role("Chief Domestic Officer")){
						cur_frm.set_df_property("memo_status", "read_only", 1);
						cur_frm.set_df_property("ceo_comments", "read_only", 1);
						cur_frm.set_df_property("cco_comments", "read_only", 1);
						cur_frm.set_df_property("cfo_comments", "read_only", 1);
						cur_frm.set_df_property("coo_comments", "read_only", 1);
						cur_frm.set_df_property("cdo_comments", "read_only", 0);
						cur_frm.set_df_property("csqa_comments", "read_only", 1);
					
					}
					else if (frappe.user.has_role("Chief Safety Quality Assurance")){
						cur_frm.set_df_property("memo_status", "read_only", 1);
						cur_frm.set_df_property("ceo_comments", "read_only", 1);
						cur_frm.set_df_property("cco_comments", "read_only", 1);
						cur_frm.set_df_property("cfo_comments", "read_only", 1);
						cur_frm.set_df_property("coo_comments", "read_only", 1);
						cur_frm.set_df_property("cdo_comments", "read_only", 1);
						cur_frm.set_df_property("csqa_comments", "read_only",0);
					
					}
				}
			}
		})

		if (frappe.user.has_role("Chief Executive Officer")){
			if (!frm.doc.ceo && frm.doc.docstatus == 0){
				
				var Current_User = user;
				frappe.call({
					method:"frappe.client.get",
					args: {
						doctype:"User",
						filters: {'email': Current_User
						},
					},
					callback: function(r) {
						cur_frm.set_value("ceo", r.message["full_name"]);
					}
				})
			}
			cur_frm.set_df_property("ceo_comments", "read_only", 0);
			cur_frm.set_df_property("cfo_comments", "read_only", 1);
			cur_frm.set_df_property("cco_comments", "read_only", 1);
			cur_frm.set_df_property("coo_comments", "read_only", 1);
			cur_frm.set_df_property("cdo_comments", "read_only", 1);
			cur_frm.set_df_property("csqa_comments", "read_only", 1);
			}
		else if (frappe.user.has_role("Chief Corporate Officer")){
			if (!frm.doc.cco && frm.doc.docstatus == 0){
				
				var Current_User = user;
				frappe.call({
					method:"frappe.client.get",
					args: {
						doctype:"User",
						filters: {'email': Current_User
						},
					},
					callback: function(r) {
						cur_frm.set_value("cco", r.message["full_name"]);
					}
				})
			}
			cur_frm.set_df_property("ceo_comments", "read_only", 1);
			cur_frm.set_df_property("cfo_comments", "read_only", 1);
			cur_frm.set_df_property("cco_comments", "read_only", 0);
			cur_frm.set_df_property("coo_comments", "read_only", 1);
			cur_frm.set_df_property("cdo_comments", "read_only", 1);
			cur_frm.set_df_property("csqa_comments", "read_only", 1);
		
		} else if (frappe.user.has_role("Chief Operation Officer")){
			if (!frm.doc.coo && frm.doc.docstatus == 0){
				
				var Current_User = user;
				frappe.call({
					method:"frappe.client.get",
					args: {
						doctype:"User",
						filters: {'email': Current_User
						},
					},
					callback: function(r) {
						cur_frm.set_value("coo", r.message["full_name"]);
					}
				})
			}
			cur_frm.set_df_property("ceo_comments", "read_only", 1);
			cur_frm.set_df_property("cfo_comments", "read_only", 1);
			cur_frm.set_df_property("cco_comments", "read_only", 1);
			cur_frm.set_df_property("coo_comments", "read_only", 0);
			cur_frm.set_df_property("cdo_comments", "read_only", 1);
			cur_frm.set_df_property("csqa_comments", "read_only", 1);
		
		} else if (frappe.user.has_role("Chief Finance Officer")){
			if (!frm.doc.cfo && frm.doc.docstatus == 0){
				
				var Current_User = user;
				frappe.call({
					method:"frappe.client.get",
					args: {
						doctype:"User",
						filters: {'email': Current_User
						},
					},
					callback: function(r) {
						cur_frm.set_value("cfo", r.message["full_name"]);
					}
				})
			}
			cur_frm.set_df_property("ceo_comments", "read_only", 1);
			cur_frm.set_df_property("cfo_comments", "read_only", 0);
			cur_frm.set_df_property("cco_comments", "read_only", 1);
			cur_frm.set_df_property("coo_comments", "read_only", 1);
			cur_frm.set_df_property("cdo_comments", "read_only", 1);
			cur_frm.set_df_property("csqa_comments", "read_only", 1);
		
		} else if (frappe.user.has_role("Chief Domestic Officer")){
			if (!frm.doc.cdo && frm.doc.docstatus == 0){
				
				var Current_User = user;
				frappe.call({
					method:"frappe.client.get",
					args: {
						doctype:"User",
						filters: {'email': Current_User
						},
					},
					callback: function(r) {
						cur_frm.set_value("cdo", r.message["full_name"]);
					}
				})
			}
			cur_frm.set_df_property("ceo_comments", "read_only", 1);
			cur_frm.set_df_property("cfo_comments", "read_only", 1);
			cur_frm.set_df_property("cco_comments", "read_only", 1);
			cur_frm.set_df_property("coo_comments", "read_only", 1);
			cur_frm.set_df_property("cdo_comments", "read_only", 0);
			cur_frm.set_df_property("csqa_comments", "read_only", 1);
		
		} else if (frappe.user.has_role("Chief Safety Quality Assurance")){
			if (!frm.doc.csqa && frm.doc.docstatus == 0){
				
				var Current_User = user;
				frappe.call({
					method:"frappe.client.get",
					args: {
						doctype:"User",
						filters: {'email': Current_User
						},
					},
					callback: function(r) {
						cur_frm.set_value("csqa", r.message["full_name"]);
					}
				})
			}
			cur_frm.set_df_property("ceo_comments", "read_only", 1);
			cur_frm.set_df_property("cfo_comments", "read_only", 1);
			cur_frm.set_df_property("cco_comments", "read_only", 1);
			cur_frm.set_df_property("coo_comments", "read_only", 1);
			cur_frm.set_df_property("cdo_comments", "read_only", 1);
			cur_frm.set_df_property("csqa_comments", "read_only", 0);
		
		}
	},
});

frappe.ui.form.on("Memo CC List", "employee_id", function(frm, cdt, cdn){
	var d = locals[cdt][cdn];

	cur_frm.set_query("employee_id", function (frm) {
        return {
            "filters": {
				name : d.employee_id,
                employee_group: ["=", "Senior Executive Management"]
            }
        }
    });

	frappe.call({
			method: "frappe.client.get",
			args: {
					doctype: "Employee",
					filters: {
						name : d.employee_id
				}
				},
				callback: function (data) {
					frappe.model.set_value(d.doctype, d.name, "employee_name",  data.message["employee_name"]);
					frappe.model.set_value(d.doctype, d.name, "user_id",  data.message["user_id"]);
				}
		})

});