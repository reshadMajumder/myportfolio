from django.db import models

class Banner(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200)
    background_image = models.FileField(upload_to='images/')
class Skill(models.Model):
    name = models.CharField(max_length=100)
    level = models.IntegerField()

class About(models.Model):
    content = models.TextField()
    image = models.FileField(upload_to='images/')

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.FileField(upload_to='images/')
    github_link = models.URLField()
    live_link = models.URLField()


class Achivement(models.Model):
    ICON_CHOICES = [
        ('Award', 'Award'),
        ('Star', 'Star'),
        ('Trophy', 'Trophy'),
    ]
    title = models.CharField(max_length=200)
    description = models.TextField()
    icon = models.CharField(max_length=10, choices=ICON_CHOICES, default='trophy')


class Cv(models.Model):
    cv = models.FileField(upload_to='cv/')