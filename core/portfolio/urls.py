from django.urls import path
from .views import BannerView, SkillListView, AboutView, ProjectListView,AchivementsListView,CvView

urlpatterns = [
    path('banner/', BannerView.as_view(), name='banner'),
    path('skills/', SkillListView.as_view(), name='skills'),
    path('about/', AboutView.as_view(), name='about'),
    path('projects/', ProjectListView.as_view(), name='projects'),
    path('achivements/', AchivementsListView.as_view(), name='achivements'),
    path('cv/', CvView.as_view(), name='cv'),
]