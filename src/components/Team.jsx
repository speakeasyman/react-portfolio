export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>View the Repos</h2>
          <p>
            Here are the links to the Repos for projects.
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
              <a href={`${d.job}`}
              title='The Tailorist Repo'
              target="_blank" rel='noreferrer'>

                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}                    
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      
                    </div>
                  </div>
                </div>
              </a>
             
              
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
