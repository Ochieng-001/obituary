from app import app, db
from flask import render_template, request, redirect, url_for
from app.models import Obituary
from app.forms import ObituaryForm

@app.route('/submit', methods=['GET', 'POST'])
def submit_obituary():
    form = ObituaryForm()
    if form.validate_on_submit():
        obituary = Obituary(
            name=form.name.data,
            date_of_birth=form.date_of_birth.data,
            date_of_death=form.date_of_death.data,
            content=form.content.data,
            author=form.author.data,
            slug=form.slug.data
        )
        db.session.add(obituary)
        db.session.commit()
        return redirect(url_for('view_obituaries'))
    return render_template('obituary_form.html', form=form)

@app.route('/obituaries')
def view_obituaries():
    obituaries = Obituary.query.all()
    return render_template('view_obituaries.html', obituaries=obituaries)
