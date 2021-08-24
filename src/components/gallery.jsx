export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Portfolio</h2>
          <p>
            Here are some projects I have worked on as a part of my coding class
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='https://anneliserowan.github.io/the-tailorist/'
                    title='The Tailorist'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>The Tailorist</h4>
                    </div>
                    <img
                      src='img/portfolio/the-tailorist.gif'
                      className='img-responsive'
                      alt='The Tailorist'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='https://follow-the-reader.herokuapp.com/'
                    title='Follow the Reader'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Follow the Reader</h4>
                    </div>
                    <img
                      src='img/portfolio/followTheReader.PNG'
                      className='img-responsive'
                      alt='Follow the Reader'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='https://speakeasyman.github.io/6-weather-dashboard/'
                    title='Weather Dashboard'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Weather Dashboard</h4>
                    </div>
                    <img
                      src='img/portfolio/weather.PNG'
                      className='img-responsive'
                      alt='Weather Dashboard'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='https://hw-workout-tracker-jn.herokuapp.com'
                    title='Fitness Tracker'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Fitness Tracker</h4>
                    </div>
                    <img
                      src='img/portfolio/fitness.PNG'
                      className='img-responsive'
                      alt='Fitness Tracker'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='https://peaceful-forest-99866.herokuapp.com/'
                    title='Note Taker'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Note Taker</h4>
                    </div>
                    <img
                      src='img/portfolio/note-taker.PNG'
                      className='img-responsive'
                      alt='Note Taker'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='https://speakeasyman.github.io/5-day_planner/'
                    title='Day Planner'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Day Planner</h4>
                    </div>
                    <img
                      src='img/portfolio/planner.PNG'
                      className='img-responsive'
                      alt='Planner'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            {/* <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/07-large.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Dolor Sit</h4>
                    </div>
                    <img
                      src='img/portfolio/07-small.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div> */}
            {/* <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/08-large.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Lorem Ipsum</h4>
                    </div>
                    <img
                      src='img/portfolio/08-small.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div> */}
            {/* <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/09-large.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Adipiscing Elit</h4>
                    </div>
                    <img
                      src='img/portfolio/09-small.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
