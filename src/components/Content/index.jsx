import React from 'react';
import PropTypes from 'prop-types';
import './Content.scss';
import world from "./world.png";

Content.propTypes = {

};

function Content(props) {
    return (
        <div class="content">
            <div class='side'>
                <p>Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</p>
                <div><img src={world} alt="" /></div>
            </div>

            <div class='main'>
                <div class='informain'>
                    <p class='dangky'>Đăng ký </p>
                    <p class='nhanhchong'>nhanh chóng và dễ dàng.</p>
                </div>
                <div className="formdangnhap">
                    <div><input type="text" /><input type="text" /></div>
                    <div><input type="text" /></div>
                    <div><input type="text" /></div>
                    <div>Ngày sinh</div>
                </div>
            </div>
        </div>
    );
}

export default Content;