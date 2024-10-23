from django.contrib import admin

# Register your models here.

from .models import Banner, Skill, About, Project,Achivement,Cv

admin.site.register(Banner)
admin.site.register(Skill)
admin.site.register(About)
admin.site.register(Project)
admin.site.register(Achivement)
admin.site.register(Cv)