# Generated by Django 3.0.8 on 2021-03-06 09:24

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0002_remove_carousel_author'),
    ]

    operations = [
        migrations.AddField(
            model_name='newsletter',
            name='date',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
