import React from 'react'
import Layout from '../../layout/Layout'
import BannerSecondary from '../../components/Banner/BannerSecondary'
import Faq from '../../components/faq/Faq'
import { faq } from '../../data/db'

const Services = () => {
  return (
    <Layout title={"Services"} activeLink="Services">
        <BannerSecondary title={"Services"} activeLink="Services" />
        <Faq faq={faq} />
    </Layout>
  )
}

export default Services