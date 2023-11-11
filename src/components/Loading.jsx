'use client';

import { Oval } from 'react-loader-spinner';
import { LOADING_SPINNER_COLOR, LOADING_SPINNER_SECONDARY_COLOR } from '@/utils/constants';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Oval color={LOADING_SPINNER_COLOR} secondaryColor={LOADING_SPINNER_SECONDARY_COLOR} />
    </div>
  );
};

export default Loading;
