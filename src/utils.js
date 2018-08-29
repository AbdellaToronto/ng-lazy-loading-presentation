import React from 'react';
import { Heading, Slide, CodePane } from 'spectacle';

export const buildCodeSlide = ({
  source = '',
  title = '',
  textSize = 24,
  lang = 'typescript',
}) => (
  <Slide>
    <Heading size={6} textColor="secondary">
      {title}
    </Heading>
    <CodePane
      margin="30px 0 0"
      textSize={textSize}
      lang={lang}
      source={source}
    />
  </Slide>
);
