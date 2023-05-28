import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table, Popconfirm } from 'antd';

import { brandState$ } from '../../redux/selectors';
import { brandActions } from '../../redux/actions';
import BrandModal from '../../components/Modals/BrandModal';

const { Column } = Table;

const ManageBrands = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const dispatch = useDispatch();
	const brands = useSelector(brandState$);
	const isLoading = useSelector((state) => state.brand.isLoading);

	useEffect(() => {
		dispatch(brandActions.getBrands.getBrandsRequest());
	}, [dispatch]);

	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	const handlerSubmit = (values) => {
		const formData = new FormData();
		// chưa có upload file description
		// if (values.description) {
		// 	formData.append('description', values.description[0].originFileObj);
		// }
		formData.append('title', values.title);
		formData.append('summary', values.summary);

		dispatch(brandActions.createBrand.createBrandRequest(formData));
		setIsModalOpen(false);
	};

	const confirm = (e) => {
		dispatch(brandActions.deleteBrand.deleteBrandRequest(e));
	};
	return (
		<div>
			<Button type="primary" onClick={showModal}>
				Thêm thương hiệu
			</Button>

			<BrandModal
				open={isModalOpen}
				handlerCancel={handleCancel}
				handlerSubmit={handlerSubmit}
			/>

			<Table
				dataSource={brands}
				bordered
				rowKey="_id"
				loading={isLoading}
			>
				<Column title="Thương hiệu" dataIndex="title" key="title" />
				<Column title="Tóm tắc" dataIndex="summary" key="summary" />
				<Column
					title=""
					key="action"
					render={(_, record) => (
						<Popconfirm
							title="Xóa thương hiệu"
							description="Bạn có chắc xóa thương hiệu này?(Kể các các sản phẩm liên quan)"
							onConfirm={() => confirm(record._id)}
							okText="Chắc chắn"
							cancelText="Hủy"
						>
							<Button type="primary" danger key="Delete">
								Xóa
							</Button>
						</Popconfirm>
					)}
				/>
			</Table>
		</div>
	);
};

export default ManageBrands;
