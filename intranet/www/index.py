from __future__ import unicode_literals
import frappe
from frappe.utils import now
from frappe import _

no_cache = 1
no_sitemap = 1

def get_context(context):
     context.operations = frappe.db.sql("select name, file_name, folder_name, file_icon, file_description from `tabDocument Manager` where section='Operations'", as_dict=True)
     context.finance = frappe.db.sql("select name, file_name, folder_name, file_icon, file_description from `tabDocument Manager` where section='Finance'", as_dict=True)
     context.intranet = frappe.db.sql("select file_name, intranet_title, file_attach, file_description from `tabDocument Manager` where section='Intranet'", as_dict=True)

 #    context.finance = frappe.db.sql("select name, file_name, folder_name, file_icon, file_decription from `tabDocument Manager` where folder_name='Finance'", as_dict=True)
