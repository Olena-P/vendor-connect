import React from 'react';
import CompanyForm, { CompanyFormProps } from '@/app/components/company-form';
import Modal, { ModalProps } from '@/app/components/modal';

export interface CompanyFormModalProps extends Omit<ModalProps, 'children'> {
  onSubmit: CompanyFormProps['onSubmit'];
}

export function CompanyFormModal({ onSubmit, ...rest }: CompanyFormModalProps) {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
}
