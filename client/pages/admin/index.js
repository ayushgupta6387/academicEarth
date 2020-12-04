import Layout from '../../components/Layout';
import withAdmin from '../withAdmin';
import Link from 'next/link';

const Admin = ({ user }) => (
    <Layout>
        <h1>Admin Dashboard</h1>
        <br />
        <div className=" jumbotron row">
            <div className="col-md-4">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a href="/admin/category/create" className="nav-link text-primary">
                            Create category
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link href="/admin/category/read">
                            <a className="nav-link text-danger">All categories</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/admin/link/read">
                            <a className="nav-link text-success">All Links</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/user/profile/update">
                            <a className="nav-link text-warning">Profile update</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col-md-8"></div>
        </div>
    </Layout>
);

export default withAdmin(Admin);
