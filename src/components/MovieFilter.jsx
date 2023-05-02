import React from 'react'

export default function MovieFilter(props) {
  
  const {
    typeFilter,
    setTypeFilter,
    countFilter,
    setCountFilter,
    yearFilter,
    setYearFilter
  } = props

  const typeFilters = ['movie', 'series', 'episode']
  const countFilters = [10, 20, 30]
  const yearFilters = []

  for (let i = 2023; i >= 1985; i--) {
    yearFilters.push(i.toString())
  }

  return (
    <>
      <div className="flex justify-between my-1 mr-2 lg:w-96">
        <select
          className="rounded border-2 lg:w-28"
          value={typeFilter}
          onChange={e => setTypeFilter(e.target.value)}>
          {typeFilters.map(type => (
            <option
              key={type}
              value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          className="rounded border-2 lg:w-28"
          value={countFilter}
          onChange={e => setCountFilter(e.target.value)}>
          {countFilters.map(count => (
            <option
              key={count}
              value={count}>
              {count}
            </option>
          ))}
        </select>

        <select
          className="rounded border-2 lg:w-28"
          value={yearFilter}
          onChange={e => setYearFilter(e.target.value)}>
          <option value="">All Years</option>
          {yearFilters.map(year => (
            <option
              key={year}
              value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}
