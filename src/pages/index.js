import React from 'react';

import './styles/home.css'
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/Hero';
import WriteTask from '../components/image-components/write-task';
import Work from '../components/image-components/work';
import CheckOff from '../components/image-components/check-off';
import ShortBreak from '../components/image-components/short-break';
import Repeat from '../components/image-components/repeat';
import LongBreak from '../components/image-components/long-break';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Hero />
    <div className='info'>
      <h1>The Pomodoro Technique</h1>
      <div className='hold-blurb'>
        <div className='blurb'>
          <div className='over'>
            <WriteTask />
            <h4>List tasks that need to be completed</h4>
          </div>
          <div className='under'>
          You can choose one large task or multiple small tasks. 
          As long as you are willing to give your undivided attention 
          to the tasks. Preferably in sequential order.
          </div>
        </div>
        <div className='blurb'>
          <div className='over'>
            <Work />
            <h4>Work for 25 min (a Pomodoro)</h4>
          </div>
          <div className='under'>
          Make sure to focus on the tasks you've listed.  
          It's very important to keep this time distraction free. 
          Whether that be from your phone, email, or other people.
          </div>
        </div>
        <div className='blurb'>
          <div className='over'>
            <CheckOff />
            <h4>Check off any completed tasks </h4>
          </div>
          <div className='under'>
          After a successful Pomodoro check off any completed tasks. 
          This may seem like a small step, but it creates a feeling of accomplishment. 
          Which is vital to productivity.  
          </div>
        </div>
        <div className='blurb'>
          <div className='over'>
            <ShortBreak />
            <h4>Take a short break (5 min)</h4>
          </div>
          <div className='under'>
          Do whatever you feel like during this time away from your work. 
          This will give your brain a rest which thus preparing you for the next Pomodoro.
          </div>
        </div>
        <div className='blurb'>
          <div className='over'>
            <Repeat />
            <h4>Repeat the process</h4>
          </div>
          <div className='under'>
          The steps up until this point aren't truly effective unless they are repeated multiple times. 
          Once a pattern is created the true power of this technique is revealed.
          </div>
        </div>
        <div className='blurb'>
          <div className='over'>
            <LongBreak />
            <h4>After 4 times take a longer break</h4>
          </div>
          <div className='under'>
          Even with the shorter breaks your brain can still get 
          bogged down with whatever tasks you are working on. 
          Make this time truly restful and mindless.
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
