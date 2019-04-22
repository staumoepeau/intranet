# -*- coding: utf-8 -*-
# Copyright (c) 2019, Sione Taumoepeau and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Memo(Document):
	pass


@frappe.whitelist()
def get_employee(doctype, txt, searchfield, start, page_len, filters):
	emp = frappe.db.sql("select employee_name, employee_id, employee_group from `tabEmployee`")
	return emp