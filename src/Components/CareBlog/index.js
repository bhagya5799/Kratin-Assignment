import React from 'react'
import './index.css'

const CareBlog = () => {
  return (
    <div className='carblog d-flex flex-column'>
          <h1>Stay informed with the CARE LIFE Blog.</h1>
          <div className='d-flex j-between'>
            <div className='blog-card d-flex flex-column'>
                  <img src='https://assets.website-files.com/5a7b67de5ce0ff00013ff9aa/64233585b5eae6404ddeb7e2_Blog%20Banner%20Template%202023%20(660%20%C3%97%20425%20px)-p-500.png'
                  height='200px' width='100%' alt='child'/>
                  <h4>How to Support a Loved One Who Has Autism</h4>
                  <p>
                      Individuals with autism may struggle with social interaction and may find it difficult to express their emotions. As a result, they may come across as rude or uninterested in others. It's important to remember that this is not intentional and to be understanding and supportive of their struggles. 
                      Show them love and acceptance and help them navigate social situations.
                  </p>

            </div>
              <div className='blog-card d-flex flex-column'>
                  <img src='https://assets.website-files.com/5a7b67de5ce0ff00013ff9aa/640f7de69796456fa9fa897a_Blog%20Banner%20Template%202023%20(660%20%C3%97%20425%20px)-p-500.jpg'
                      height='200px' width='100%' alt='elder'/>
                  <h4>Innovative Approaches to Managing COPD in Elderly Care Settings</h4>
                  <p>
                      A nursing home is a facility for people who do not require hospitalization but cannot be cared for at home. Nursing aids and professional nurses are usually available 24 hours a day in most nursing facilities. Several nursing homes are structured similarly to hospitals. Medical treatment is provided, 
                      as well as physical, speech, and occupational therapy.
                  </p>

              </div>
              <div className='blog-card d-flex flex-column'>
                  <img src='https://assets.website-files.com/5a7b67de5ce0ff00013ff9aa/63d2ce82737fae56abc2b6d8_Blog%20Banner%20Template%202023%20(Facebook%20Post%20(Landscape))%20(1)-p-500.png'
                      height='200px' width='100%' alt='care'/>
                  <h4>How To Create A Senior Workout Routine</h4>
                  <p>
                      When entering the new year, most people make it a point to focus more on their physical fitness. While exercising is important at all points of life, it is especially important as you age. Physical activity can be known to reduce the risk of injury and some health conditions. When creating a workout routine for older adults, you should incorporate 150 minutes of moderate endurance into your week. This can be in the form of strength, balance and flexibility exercises. In this blog w
                      e will show you some moves to stay active while also staying safe!
                  </p>

              </div>

          </div>
    </div>
  )
}
export default CareBlog
