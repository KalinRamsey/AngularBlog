import { Article } from './article';

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'My first article',
    content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt posuere tortor, et aliquet nulla lobortis sed. Aliquam sodales aliquet dolor, tincidunt interdum ipsum commodo ac. Donec quis nibh vel odio lacinia lobortis eu a lacus. Morbi vel nisl leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p><p>Suspendisse id posuere risus. Duis id urna ultrices, pretium enim sed, dignissim dui. Nam sed tellus sed justo posuere scelerisque ut sit amet mauris. Vivamus efficitur ultricies massa, et lacinia velit commodo lacinia. Nam pharetra augue ut lacinia interdum. Pellentesque dapibus vel massa ut fringilla.</p>',
    description: "This is my first article description. it's great. please read it <3",
    key: 'my-first-article',
    date: new Date(),
    imageUrl: 'http://angular.io/assets/images/logos/angular/angular.png'
  },
  {
    id: 2,
    title: 'My second article',
    content: '<p>Cras sollicitudin rhoncus tortor nec ultricies. Donec vitae mauris placerat, ultrices quam nec, aliquam augue. Vivamus sed diam lacinia, viverra purus at, dignissim turpis.</p><p>Donec scelerisque sed odio eu malesuada. Proin commodo diam sit amet malesuada dapibus. Nunc eleifend libero id eros vestibulum, non hendrerit libero vehicula. Phasellus leo est, convallis eu turpis id, laoreet faucibus neque. Sed sem augue, dapibus sit amet aliquam eu, rhoncus quis enim. In quis tincidunt magna. Nam mauris mauris, posuere eget ornare at, bibendum a enim. Nunc vel ligula a urna pulvinar ultrices eget vitae ex. Integer non sollicitudin elit. Sed convallis egestas mattis. Curabitur at metus erat. Sed massa tortor, sollicitudin ac odio eget, sollicitudin malesuada ante.</p><p>Vivamus quis orci quam. Etiam congue elementum sapien nec viverra.</p>',
    description: "This is my second article description. it's better than the first. please read it :D",
    key: 'my-second-article',
    date: new Date(),
    imageUrl: 'http://angular.io/assets/images/logos/angular/angular_solidBlack.png'
  }
];
