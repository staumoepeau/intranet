from __future__ import unicode_literals
import frappe
from frappe.utils import now
from frappe import _

no_cache = 1
no_sitemap = 1

def get_context(context):
    context.navbar_menu = frappe.db.sql("select background_image, intranet_menu, intranet_menu_label text_style, intranet_menu_details, section_background, section_class from `tabIntranet Top Menu` where published = 1", as_dict=True)
    context.intranet_header = frappe.db.sql("select intranet_title, file_attach from `tabIntranet Header` where published = 1", as_dict=True)
    context.document_manager = frappe.db.sql("select owner, modified, sub_menu, file_url, file_name, top_menu from `tabFile` where published = 1 and is_private = 0", as_dict=True)
    context.subheading = frappe.db.sql("select sub_menu, menu_description from `tabIntranet Sub Menu` where published = 1", as_dict=True)
    context.latest_news = frappe.db.sql("select name, news_title, news_sub_title, news_details, news_date, owner from `tabIntranet News` where published = 1", as_dict=True)
    context.list_vacancies = frappe.db.sql("select name, vacancy_title, vacancy_details from `tabIntranet Vacancy` where published = 1", as_dict=True)
    context.announcement = frappe.db.sql("select name, announcement_title, announcement_details, modified from `tabIntranet Announcement` where published = 1", as_dict=True)
