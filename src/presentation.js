/* eslint import/no-webpack-loader-syntax: 0 */
import codeLazy from './assets/code-lazy-loading-walkthrough.mp4';
import webLazy from './assets/video_lazy_app_walkthrough.mp4';

import React from 'react';
import {
  Deck,
  Heading,
  Slide,
  Text,
  S,
  Link,
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

import { colours, fontFamilies } from './theme';
import { AnswerSlide, QuestionSlide } from './slide-maker';

require('normalize.css');

const theme = createTheme(colours, fontFamilies);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
        progress="bar"
      >
        <Slide>
          <Heading
            size={3}
            textAlign="left"
            textColor="secondary"
            lineHeight={1.2}
            bold
          >
            Angular 5+ and <S type="bold" textColor="blue">
              Lazy Loading
            </S>
          </Heading>
          <Text
            margin="10px 0 0"
            textColor="secondary"
            textAlign="left"
            size={5}
          >
            Abdella (Della) Ali
          </Text>
        </Slide>
        <QuestionSlide question="What is lazy loading?" />
        {AnswerSlide({answers: [
            'Only load parts of your code when you specifically need it',
            <React.Fragment>You need to implement something called <S type="bold" textColor="blue">Code-splitting</S> to help lazy loading figure out how to break up your code into chunks</React.Fragment>,
            <React.Fragment>In <S type="bold" textColor="#f00025">Angular</S> code splitting is informed by lazily loaded routes based on <S type="bold" textColor="blue">Angular Modules</S></React.Fragment>,
            <React.Fragment>Each <S type="bold" textColor="blue">chunk</S> is loaded into your browser when the route for that chunk is hit</React.Fragment>,
            <React.Fragment>The Two important pieces of lazy loading are <S type="bold" textColor="blue">Code Splitting</S> and <S type="bold" textColor="blue">Asynchronously loading Chunks</S></React.Fragment>,
          ]})}

        <QuestionSlide question={<React.Fragment><S type="bold" textColor="blue">Why</S> Do this?</React.Fragment>} />
        {AnswerSlide({answers: [
            <React.Fragment>In large applications, the application size can be a bottleneck in improving initial load times</React.Fragment>,
            <React.Fragment>A user may only consistently use a fraction of your application, so sending the entire app over every time can be inefficient</React.Fragment>,
            <React.Fragment>It encourages a route level modularization of your application</React.Fragment>,
          ]})}

        <QuestionSlide question={<React.Fragment><S type="bold" textColor="blue">How</S> do I do this?</React.Fragment>} />
        {AnswerSlide({answers: [
            <React.Fragment>In Angular, especially while using the CLI, it's pretty straightforward</React.Fragment>,
            <React.Fragment>You need to use the <S type="bold" textColor="blue">loadChildren</S> key in your route definition, with a path to the module</React.Fragment>,
            <React.Fragment>The module you want to lazy load must import it's own router module instance and define it's routes</React.Fragment>,
            <React.Fragment>And in Angular6+ you can use the provideIn syntax in a provider to handle the code-splitting of services</React.Fragment>,
          ]})}

        <QuestionSlide question={<React.Fragment><S type="bold" textColor="blue">Demo?</S></React.Fragment>} />
        <Slide>
          <video controls width="100%" height="auto">
            <source src={codeLazy} />
          </video>
        </Slide>
        <Slide>
          <video controls width="100%" height="auto">
            <source src={webLazy} />
          </video>
        </Slide>


        <QuestionSlide question={<React.Fragment><S type="bold" textColor="blue">Links</S></React.Fragment>} />
        {AnswerSlide({answers: [
            <Link href="https://angular.io/guide/lazy-loading-ngmodules"><S type="bold" textColor="blue">Angular Docs</S></Link>,
            <Link href="https://codeburst.io/how-to-implement-lazy-loading-in-angular-6-419491102591?gi=1478f8b27e09"><S type="bold" textColor="blue">Tutorial 1</S></Link>,
            <Link href="https://www.youtube.com/watch?v=V-1Fq_mAl20"><S type="bold" textColor="blue">Video Tutorial</S></Link>,
          ]})}
        <QuestionSlide question={<React.Fragment><S type="bold" textColor="blue">Thank you!</S></React.Fragment>} />


      </Deck>
    );
  }
}
