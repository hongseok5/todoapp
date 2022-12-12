import React from 'react';
import { MdCheckBox, MdRemoveCircleOutline, MdCheckBoxOutlineBlank } from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ( {todo, onRemove, onToggle, style}) => {    

    const { id, text, checked } = todo;
    return (
        <div className='TodoListItem-virtualized' style={style}>
            <div className={cn('checkbox',{checked})} onClick={() => onToggle(id)}>
                { checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank/>}
                <div className='text'> {text}</div>

            </div>
            <div className='remove' onClick= {() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}

export default React.memo(
    TodoListItem, 
    (prevProps, nextProps) => prevProps.todo === nextProps.todo); // 컴포넌트 최적화, todo, onRemove, onToggle 가 바뀌지 않으면 리렌더링 안 함.