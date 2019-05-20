# -*- coding: utf-8 -*-
# Copyright (c) 2019, Sione Taumoepeau and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class IntranetTopMenu(Document):

#	def on_submit(self):
#		self.validate_booking_ref()		
#		self.check_bulk_cargo()

	def validate(self):
		self.check_menu_for_spaces()
	
	
	
	def check_menu_for_spaces(self):

			if ' ' in self.intranet_menu:
				self.intranet_menu_label = '_'.join(self.intranet_menu.split())
