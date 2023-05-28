import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table, Popconfirm } from 'antd';

import { categoryState$ } from '../../redux/selectors';
import { categoryActions } from '../../redux/actions';
import CategoryModal from '../../components/Modals/CategoryModal';

const { Column } = Table;

const ManageCategory = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const dispatch = useDispatch();
	const categories = useSelector(categoryState$);
	const isLoading = useSelector((state) => state.category.isLoading);

	useEffect(() => {
		dispatch(categoryActions.getCategories.getCategoriesRequest());
	}, [dispatch]);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	const handlerSubmit = (values) => {
		dispatch(categoryActions.createCategory.createCategoryRequest(values));
		setIsModalOpen(false);
	};

	const confirm = (e) => {
		dispatch(categoryActions.deleteCategory.deleteCategoryRequest(e));
	};

	return (
		<div>
			<Button type="primary" onClick={showModal}>
				Thêm thể loại
			</Button>

			<CategoryModal
				open={isModalOpen}
				handlerCancel={handleCancel}
				handlerSubmit={handlerSubmit}
			/>

			<Table
				dataSource={categories}
				bordered
				rowKey="_id"
				loading={isLoading}
			>
				<Column title="Thương hiệu" dataIndex="name" key="name" />
				<Column
					title="Miêu tả"
					dataIndex="description"
					key="description"
				/>
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

export default ManageCategory;
