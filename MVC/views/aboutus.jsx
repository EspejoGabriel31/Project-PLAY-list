const React = require('react')
const Def = require('./default')



function aboutUs() {
    return(
        <Def>
          <h1>About Us</h1>
             <main>
            <div class="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2>Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      
      <div class="container">
        <h2 style={{color: 'black'}}>Angelo Abat</h2>
        <p class="title" style={{color: 'black'}}>CEO Founder</p>
        <p style={{color: 'black'}}>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p style={{color: 'black'}}>angeloabat25@gmail.com</p>
        
        <a href='https://www.linkedin.com/in/angelo-abat-57541b23a/'>
        <p><button class="button">LinkedIn</button></p>
        </a>

      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">

      <div class="container">
        <h2 style={{color: 'black'}}>Allison Ruiz</h2>
        <p class="title" style={{color: 'black'}}>Art Director</p>
        <p style={{color: 'black'}}>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p style={{color: 'black'}}>allisonnruizz@gmail.com</p>
        <a href='https://www.linkedin.com/in/allisonruiz/'>
        <p><button class="button">LinkedIn</button></p>
        </a>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
   
      <div class="container">
        <h2 style={{color: 'black'}}>Gabriel Espejo</h2>
        <p class="title" style={{color: 'black'}}>Designer</p>
        <p style={{color: 'black'}}>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p style={{color: 'black'}}>espejo.gabriel779@gmail.com</p>
        <a href='https://www.linkedin.com/in/gabriel-espejo-a14960145/'>
        <p><button class="button">LinkedIn</button></p>
        </a>
      </div>
    </div>
  </div>
</div>


<div class="column">
    <div class="card">

      <div class="container">
        <h2 style={{color: 'black'}}>Ángel Guevara</h2>
        <p class="title" style={{color: 'black'}}>Designer</p>
        <p style={{color: 'black'}}>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p style={{color: 'black'}}>john@example.com</p>
        <a href='https://www.linkedin.com/in/angel-guevara8/'>
        <p><button class="button">LinkedIn</button></p>
        </a>
      </div>
    </div>
  </div>
            </main> 
        </Def>
    )
}

module.exports = aboutUs 