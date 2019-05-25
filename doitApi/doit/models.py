# Models 

from django.db import models

class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    typeExercise = models.IntegerField(default=1)
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title
