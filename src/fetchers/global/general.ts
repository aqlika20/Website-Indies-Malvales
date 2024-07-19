import { API_URL } from '@/constants/env';
import axios from 'axios';
import { GetStaticProps } from 'next';

export const getGeneralData: GetStaticProps = async () => {
  const responseGeneral = await axios.get(`${API_URL}/general`);

  const layoutGeneral = '/general';
  const slugGeneral = layoutGeneral.toString() || '';
  const responseWeblayoutGeneral = await axios.get(`${API_URL}/web-layout/detail${slugGeneral}`);
  const layGeneral = responseWeblayoutGeneral?.data?.data; 
  const email = layGeneral.detail.detail?.find((e) => e.field_name === 'Email');
  const email_id_response = email.layout_detail_id;
  const email_en_response = email.layout_detail_en;
  const telp = layGeneral.detail.detail?.find((e) => e.field_name === 'Telp');
  const telp_id_response = telp.layout_detail_id;
  const telp_en_response = telp.layout_detail_en;

  const combinedData = {
    ...responseGeneral.data.data,
    email_id: email_id_response,
    email_en: email_en_response,
    telp_id: telp_id_response,
    telp_en: telp_en_response,
  };

  return combinedData;
};
