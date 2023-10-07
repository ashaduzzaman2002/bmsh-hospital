import React from 'react'
import Layout from '../../layout/Layout'
import BannerSecondary from '../../components/Banner/BannerSecondary'

const Gallery = () => {
  return (
    <Layout title={'Gallery'} activeLink={'Gallery'}>
        <BannerSecondary title={'Gallery'} />
    </Layout>
  )
}

export default Gallery