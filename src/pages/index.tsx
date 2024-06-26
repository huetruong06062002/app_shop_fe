'use client'
import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material';
import Head from 'next/head'
import CustomTextField from 'src/components/text-field';
import { useSettings } from 'src/hooks/useSettings';

export default function Home() {

  const { settings } = useSettings()
  console.log('setting', settings);

  return (
    <>
      <Head>
        <title>Shopping clone</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box sx={{margin:6, width: "200px"}}><CustomTextField id="outlined-multiline-flexible" label="Multiline"/></Box>
    </>
  )
}
