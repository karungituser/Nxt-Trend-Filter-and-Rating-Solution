import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const renderRatingsFiltersList = () => {
    const {ratingsList} = props

    return ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props
      const onClickRatingItem = () => changeRating(rating.ratingId)

      const ratingClassName =
        activeRatingId === rating.ratingId ? 'and-up active-rating' : 'and-up'

      return (
        <li
          className="rating-item"
          key={rating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-image"
          />
          <p className={ratingClassName}>&up</p>
        </li>
      )
    })
  }

  const renderRatingFilters = () => (
    <>
      <h1 className="rating-heading">Rating</h1>
      <ul className="rating-list-container">{renderRatingsFiltersList()}</ul>
    </>
  )

  const renderCategoriesList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props

      const onClickCategoryItem = () => changeCategory(category.categoryId)
      const isActive = category.categoryId === activeCategoryId
      const categoryClassName = isActive
        ? 'category-name active-category'
        : 'category-name'
      return (
        <li
          className={categoryClassName}
          key={category.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderProductCategories = () => (
    <div>
      <h1 className="category-heading">Category</h1>
      <ul className="category-list-container">{renderCategoriesList()}</ul>
    </div>
  )

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div className="search-input-container">
        <input
          type="search"
          placeholder="Search"
          className="search-input"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const {clearFilter} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRatingFilters()}
      <button type="button" className="clear-btn" onClick={clearFilter}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
