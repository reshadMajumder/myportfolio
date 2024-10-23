from rest_framework import serializers
from .models import Banner, Skill, About, Project, Achivement,Cv

class BannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = '__all__'

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class AchivementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achivement
        fields = '__all__'
class CvSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cv
        fields = '__all__'

