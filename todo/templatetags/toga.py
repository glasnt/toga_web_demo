from django.template import Library
from django.utils.safestring import mark_safe

register = Library()


@register.filter
def html(widget):
    return mark_safe(widget.__html__())
