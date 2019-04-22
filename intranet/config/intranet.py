# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from frappe import _
import frappe

def get_data():
		return [
		{
			"label": _("Setup"),
			"items": [
				{
					"type": "doctype",
					"name": "Intranet Top Menu",
				},
				{
					"type": "doctype",
					"name": "Intranet Header",
				},
				{
					"type": "doctype",
					"name": "Intranet Sub Menu",
				}
				
			]
		},
		{
			"label": _("Intranet"),
			"items": [
				{
					"type": "doctype",
					"name": "File",
				},
				{
					"type": "doctype",
					"name": "Memo",
				},
								{
					"type": "doctype",
					"name": "Intranet News",
				},
								{
					"type": "doctype",
					"name": "Intranet Vacancy",
				},
				{
					"type": "doctype",
					"name": "Newsletter",
				},
				{
					"type": "doctype",
					"name": "Email Group",
				}
				
			]
		}
		]