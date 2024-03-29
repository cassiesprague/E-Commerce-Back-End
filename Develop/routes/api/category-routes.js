const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//Used 06 student create read to help find these

router.get('/', (req, res) => {
  Category.findAll().then((categoryData) => {
    res.json(categoryData);
  });
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
Category.findByPk(req.params.id).then((categoryData) => {
  res.json(categoryData);
});
});
  // find one category by its `id` value
  // be sure to include its associated Products

router.post('/', (req, res) => {
  Category.create(req.body)
  .then((newCategory) => {
    res.json(newCategory);
  })
  .catch((err) => {
    res.json(err);
  });
  // create a new category
});

router.put('/:id', (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
  .then((updatedCategory) => {
    res.json(updatedCategory);
  })
  .catch((err) => res.json(err));
  // update a category by its `id` value
  //Used 07 instructor update delete to help with these
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((deletedCategory) => {
    res.json(deletedCategory);
  })
  .catch((err) => res.json(err));
  // delete a category by its `id` value
});

module.exports = router;