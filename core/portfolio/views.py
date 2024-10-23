from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Banner, Skill, About, Project, Achivement,Cv
from .serializers import BannerSerializer, SkillSerializer, AboutSerializer, ProjectSerializer,AchivementSerializer,CvSerializer

class BannerView(generics.RetrieveAPIView):
    queryset = Banner.objects.all()
    serializer_class = BannerSerializer

    def get_object(self):
        return self.get_queryset().first()

class SkillListView(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class AboutView(generics.RetrieveAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer

    def get_object(self):
        return self.get_queryset().first()

class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class AchivementsListView(generics.ListAPIView):
    queryset=Achivement.objects.all()
    serializer_class=AchivementSerializer


class CvView(generics.RetrieveAPIView):
    queryset = Cv.objects.all()
    serializer_class = CvSerializer

    def get_object(self):
        return self.get_queryset().first()