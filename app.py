from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/learn')
def learn():
    return render_template('learn.html')

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')

@app.route('/glossary')
def glossary():
    return render_template('glossary.html')

@app.route('/infographics')
def infographics():
    return render_template('infographics.html')

@app.route('/about')
def about():
    return render_template('about.html')

# Info routes for downloading/redirecting
@app.route('/info/evm')
def info_evm():
    return render_template('info_doc.html', title="How an EVM Works", doc_type="evm")

@app.route('/info/timeline')
def info_timeline():
    return render_template('info_doc.html', title="Timeline of Elections", doc_type="timeline")

@app.route('/info/eci')
def info_eci():
    return render_template('info_doc.html', title="Who is the Election Commission?", doc_type="eci")

# Topic Routes for Homepage Cards
@app.route('/topic/<topic_name>')
def topic(topic_name):
    # Mapping slugs to template names
    valid_topics = {
        'voter-registration': 'topic_voter_registration.html',
        'nomination': 'topic_nomination.html',
        'campaign': 'topic_campaign.html',
        'voting-day': 'topic_voting_day.html',
        'counting': 'topic_counting.html',
        'eci': 'topic_eci.html'
    }
    
    if topic_name in valid_topics:
        return render_template(valid_topics[topic_name])
    return render_template('404.html'), 404

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True, port=5000)
