from django.db import models


class Todo(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    description = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)

    class Meta:
        ordering = ('created',)

    def __str__(self):
        return 'TODO: %s%s' % (
            self.description,
            ' (done)' if self.completed else ''
        )
