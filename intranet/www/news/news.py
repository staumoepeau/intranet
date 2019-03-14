from __future__ import unicode_literals
import frappe
from frappe.utils import now
from frappe import _

no_cache = 1
no_sitemap = 1

def get_context(context):
    context.file_image = frappe.db.sql("select name, file_icon  from `tabIntranet File Type`", as_dict=True)
    context.top_menu = frappe.db.sql("select intranet_menu, text_style, intranet_menu_details, section_background, section_class from `tabIntranet Top Menu` order by order_by", as_dict=True)
    context.intranet_header = frappe.db.sql("select intranet_title, file_attach from `tabIntranet Header` where published = 1", as_dict=True)
    context.document_manager = frappe.db.sql("select name, sub_heading, file_attach, file_name, section, file_description, download_button from `tabDocument Manager` where published = 1", as_dict=True)
    context.subheading = frappe.db.sql("select sub_menu, menu_description from `tabIntranet Sub Menu` where published = 1", as_dict=True)

    context.latest_news = frappe.db.sql("select name, news_title, news_image, news_details, creation, owner from `tabIntranet News` where published = 1", as_dict=True)
