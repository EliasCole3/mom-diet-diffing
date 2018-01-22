let fodmap = {
  veggies: {
    good: [
      'Bamboo shoots',
      'Bean sprouts',
      'Broccoli',
      'Cabbage, common and red',
      'Carrots',
      'Celery (less than 5cm stalk)',
      'Chick peas (1/4 cup max)',
      'Corn (1/2 cob max)',
      'Courgette',
      'Cucumber',
      'Eggplant',
      'Green beans',
      'Green pepper',
      'Kale',
      'Lettuce e.g. Butter, iceberg, rocket',
      'Parsnip',
      'Potato',
      'Pumpkin',
      'Red peppers',
      'Scallions / spring onions (green part)',
      'Squash',
      'Sweet potato',
      'Tomatoes',
      'Turnip'
    ],
    maybe: [],
    bad: [
      'Garlic',
      'Onions',
      'Aparagus',
      'Beans e.g. black, broad, kidney, lima, soya',
      'Cauliflower',
      'Cabbage, savoy',
      'Mange tout',
      'Mushrooms',
      'Peas',
      'Scallions / spring onions (white part)',
    ],
  },
  fruit: {
    good: [
      'Bananas, unripe',
      'Blueberries',
      'Cantaloupe',
      'Cranberry',
      'Clementine',
      'Grapes',
      'Melons e.g. Honeydew, Galia',
      'Kiwifruit',
      'Lemon',
      'Orange',
      'Pineapple',
      'Raspberry',
      'Rhubarb',
      'Strawberry',
    ],
    maybe: [],
    bad: [
      'Apples',
      'Apricot',
      'Avocado',
      'Bananas, ripe',
      'Blackberries',
      'Grapefruit',
      'Mango',
      'Peaches',
      'Pears',
      'Plums',
      'Raisins',
      'Sultanas',
      'Watermelon',
    ],
  },
  protein: {
    good: [
      'Beef',
      'Chicken',
      'Lamb',
      'Pork',
      'Quorn mince',
      'Cold cuts e.g. Ham and turkey breast',
    ],
    maybe: [],
    bad: [
      'Chorizo',
      'Sausages',
      'Processed meat (check ingredients)',
    ],
  },
  grains: {
    good: [
      'Oats',
      'Quinoa',
      'Gluten free foods e.g. breads, pasta',
      'Savory biscuits',
      'Buckwheat',
      'Chips / crisps (plain)',
      'Cornflour',
      'Oatmeal (1/2 cup max)',
      'Popcorn',
      'Pretzels',
      'Rice e.g. Basmata, brown, white',
      'Tortilla chips',
    ],
    maybe: [],
    bad: [
      'Barley',
      'Bran',
      'Cous cous',
      'Gnocchi',
      'Granola',
      'Muesli',
      'Muffins',
      'Rye',
      'Semolina',
      'Spelt',
      'Wheat foods e.g. Bread, cereal, pasta',
    ],
  },
  dairy: {
    good: [
      'Butter',
      'Dark chocolate',
      'Milk chocolate (3 squares max)',
      'White chocolate (3 squares max)',
      'Brie',
      'Camembert',
      'Cheddar',
      'Cottage cheese',
      'Feta',
      'Mozzarella',
      'Parmesan',
      'Swiss',
    ],
    maybe: [],
    bad: [
      'Cow milk',
      'Goat milk',
      'Sheep\'s milk',
      'Buttermilk',
      'Cream',
      'Custard',
      'Greek yoghurt',
      'Ice cream',
      'Sour cream',
      'Yoghurt',
      'Cream cheese',
      'Ricotta cheese',
    ],
  },
  nuts: {
    good: [
      'Almonds (max of 15)',
      'Chestnuts',
      'Hazelnuts',
      'Macademia nuts',
      'Peanuts',
      'Pecans (max of 15)',
      'Poppy seeds',
      'Pumpkin seeds',
      'Sesame seeds',
      'Sunflower seeds',
      'Walnuts',
    ],
    maybe: [],
    bad: [
      'Cashews',
      'Pistachio',
    ],
  },
  sweeteners: {
    good: [
      'Aspartame',
      'Acesulfame K',
      'Glucose',
      'Saccharine',
      'Stevia',
      'Sucralose',
      'Sugar / sucrose',
    ],
    maybe: [],
    bad: [
      'Agave',
      'High Frucose Corn Syrup (HFCS)',
      'Honey',
      'Inulin',
      'Isomalt',
      'Maltitol',
      'Mannitol',
      'Sorbitol',
      'Xylitol',
    ],
  },
  fats: {
    good: [

    ],
    maybe: [],
    bad: [

    ],
  },
  seasonings: {
    good: [
      'Barbeque sauce',
      'Chutney (1 tbsp max)',
      'Garlic infused oil',
      'Golden syrup',
      'Strawberry jam / jelly',
      'Mayonnaise',
      'Mustard',
      'Soy sauce',
      'Tomato sauce',
    ],
    maybe: [],
    bad: [
      'Hummus dip',
      'Jam (mixed berries)',
      'Pasta sauce (cream based)',
      'Relish',
      'Tzatziki dip',
    ],
  },
  beverages: {
    good: [
      'Almond milk',
      'Coconut milk',
      'Hemp milk',
      'Lactose free milk',
      'Oat milk (30ml max)',
      'Rice milk (200ml max)',
      'Soya milk made with soy protein',
      'Beer (one max)',
      'Coffee, black',
      'Drinking chocolate powder',
      'Herbal tea (weak)',
      'Orange juice (125ml max)',
      'Peppermint tea',
      'Water',
      'Wine (one max)',
    ],
    maybe: [],
    bad: [
      'Soy milk made with soy beans',
      'Coconut water',
      'Apple juice',
      'Pear juice',
      'Mango juice',
      'Sodas with HFCS',
      'Fennel tea',
      'Herbal tea (strong)',
    ],
  },
  miscellaneous: {
    good: [

    ],
    maybe: [],
    bad: [

    ],
  },
}



module.exports = {
  data: fodmap
} 

// module.exports.default = fodmap