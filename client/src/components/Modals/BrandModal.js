import React from 'react';
import { Button, Form, Input, Modal, Space, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const Field = ({ label, name, rules, input, ...passPros }) => (
	<Form.Item
		label={label}
		name={name}
		labelCol={{
			span: 8,
		}}
		wrapperCol={{
			span: 16,
		}}
		labelAlign="left"
		rules={rules}
		{...passPros}
	>
		{input}
	</Form.Item>
);

const BrandModal = ({ open = false, handlerSubmit, handlerCancel }) => {
	const [form] = Form.useForm();
	const onFinish = (values) => {
		handlerSubmit(values);
		form.resetFields();
	};
	return (
		<Modal title="Thêm thể loại" open={open} closable={false} footer={null}>
			<Form name="basic" onFinish={onFinish} form={form}>
				<Field
					label="Tên thương hiệu"
					name="title"
					rules={[
						{
							required: true,
							message: 'Vui lòng nhập tên thương hiệu',
						},
					]}
					input={<Input />}
				/>

				<Field
					label="Tóm tắc"
					name="summary"
					rules={[
						{
							required: true,
							message: 'Vui lòng nhập tóm tắt!',
						},
					]}
					input={<Input />}
				/>

				<Field
					name="description"
					label="Miêu tả"
					valuePropName="fileList"
					getValueFromEvent={(event) => event.fileList}
					input={
						<Upload
							beforeUpload={() => false}
							name="description"
							maxCount={1}
						>
							<Button icon={<UploadOutlined />}>Thêm file</Button>
						</Upload>
					}
				/>
				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Space>
						<Button type="primary" htmlType="submit">
							Thêm mới
						</Button>
						<Button htmlType="button" onClick={handlerCancel}>
							Hủy
						</Button>
					</Space>
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default BrandModal;
