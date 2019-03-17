# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from frappe import _
import frappe

def get_data():
	return [
		{
			"module_name": "Intranet",
			"color": "red",
			"icon": "octicon octicon-mention",
			"type": "module",
			"label": _("Intranet")
		}
	]