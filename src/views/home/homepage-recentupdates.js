/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import Slider from 'react-slick'
import { Link } from 'gatsby'
import { Container, Button } from '@theme-ui/components'
import RecentUpdatesQuery from 'utils/recent-updates-query'
import Image from 'components/image'
import { ChevronRight, ChevronLeft } from 'react-feather'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'

const RecentUpdates = () => {
  const recentUpdates = RecentUpdatesQuery().recentUpdates.edges
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <ChevronRight color="#F26D00" size={48} />,
    prevArrow: <ChevronLeft color="#F26D00" size={48} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <Styled.div sx={{ bg: 'background', py: ['4', '4', '5'] }}>
        <Container>
          <div sx={{ textAlign: 'center' }}>
            <div sx={{ pb: ['0', '0', '4'] }}>
              <Styled.h2>Recent Updates from OpenEBS</Styled.h2>
              <Styled.p>
                What's new from the OpenEBS contributors and community
              </Styled.p>
            </div>
            <div sx={{ px: [2, 4, 4, 2] }}>
              <Slider {...settings}>
                {recentUpdates &&
                  recentUpdates.map((edge) => {
                    const {
                      slug,
                      title,
                      feature_image,
                      custom_excerpt,
                    } = edge.node
                    return (
                      <div>
                        <Link
                          to={`/blog/${slug}`}
                          sx={{
                            display: 'block',
                            p: '4',
                            background: 'white',
                            m: '3',
                            cursor: 'pointer',
                            borderRadius: '5px',
                            textDecoration: 'none',
                            height: '424px',
                            maxHeight: '424px',
                          }}
                          title="Read More"
                        >
                          <div
                            sx={{
                              height: ['auto', 'auto', '200px'],
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              margin: 'auto',
                              width: '50%',
                            }}
                          >
                            <img
                              src={feature_image}
                              sx={{
                                maxWidth: ['220px', '280px', '260px', '290px'],
                              }}
                            />
                          </div>
                          <div>
                            <Styled.p>{title}</Styled.p>
                          </div>
                          <div>
                            <Styled.p
                              sx={{ fontWeight: '300', fontSize: [2, 2] }}
                            >
                              {custom_excerpt &&
                                custom_excerpt.substring(0, 160)}
                              ...
                            </Styled.p>
                          </div>
                        </Link>
                      </div>
                    )
                  })}

                <div
                  sx={{
                    cursor: 'pointer',
                  }}
                >
                  <div
                    sx={{
                      p: '4',
                      background: 'white',
                      m: '3',
                      height: '424px',
                      maxHeight: '424px',
                      borderRadius: '5px',
                    }}
                  >
                    <div
                      sx={{
                        height: '200px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto',
                        width: '50%',
                      }}
                    ></div>
                    <div sx={{ height: '75px' }}>
                      <Link
                        to="/blog"
                        sx={{
                          textDecoration: 'none',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <span>Go To Archive</span>
                        <span>
                          {' '}
                          <ChevronRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </Container>
      </Styled.div>
    </>
  )
}

export default RecentUpdates
